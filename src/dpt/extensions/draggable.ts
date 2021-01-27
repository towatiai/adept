
import { spring } from "svelte/motion";

export default function draggable(node: HTMLElement): void {
    let x: number, y: number;

    let selected : HTMLElement = null;
    let translation = '';
    let rect : DOMRect = null;

    function select(e : MouseEvent) {
        selected = e.target as HTMLElement;
        translation = selected.style.transform;
    }

    const coords = spring({
        x: 0,
        y: 0
    }, {
        stiffness: 0.9,
        damping: 0.9
    });

    coords.subscribe(current => {
        console.log(current)
        node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
        if (selected && rect) {
            translation = `translate3d(${current.x + rect.left}px, ${current.y + rect.top}px, 0)`;
        }

    });

    node.addEventListener("mousedown", mousedown);

    function mousedown(e: MouseEvent) {

        if (node !== selected) return false;

        rect = selected.getBoundingClientRect();

        window.addEventListener("mouseup", mouseup);
        window.addEventListener("mousemove", mousemove);

        x = e.clientX;
        y = e.clientY;

        e.cancelBubble = true;
        e.returnValue = false;

        node.style.zIndex = '9999';

        return false;
    }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
        coords.update(() => ({ x: 0, y: 0 }));
        node.style.zIndex = 'auto';
    }

    function mousemove(e: MouseEvent) {
        const dx = e.clientX - x;
        const dy = e.clientY - y;

        x = e.clientX;
        y = e.clientY;

        coords.update(current => ({ x: current.x + dx, y: current.y + dy }));

        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }
}