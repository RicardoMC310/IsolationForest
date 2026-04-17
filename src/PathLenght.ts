import { Node } from "./Node";

export function computePathLength(
    node: Node,
    point: number[],
    depth = 0
): number {
    // 🔒 proteção total
    if (
        node.feature === null ||
        node.threshold === null ||
        !node.left ||
        !node.right
    ) {
        return depth;
    }

    const value = point[node.feature];

    // 🔒 proteção extra
    if (value === undefined) {
        return depth;
    }

    if (value < node.threshold) {
        return computePathLength(node.left, point, depth + 1);
    } else {
        return computePathLength(node.right, point, depth + 1);
    }
}