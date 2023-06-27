class TreeNode {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }
}

const tree = new TreeNode(1, [
    new TreeNode(2, [
        new TreeNode(5)
    ]),
    new TreeNode(3, [
        new TreeNode(6),
        new TreeNode(7),
        new TreeNode(8, [
            new TreeNode(11)
        ])
    ]),
    new TreeNode(4, [
        new TreeNode(9),
        new TreeNode(10)
    ])
]);

function dfs(root) {

    console.log(root.value);

    if (root.children) {
        for (const child of root.children) {
            dfs(child);
        }
    }
}

function bfs(root) {
    const q = [];
    q.push(root)

    while (q.length > 0) {
        const node = q.shift();

        console.log(node.value);

        if (node.children) {
            for (const child of node.children) {
                q.push(child);
            }
        }
    }
}

console.log("\nDepth-first search (DFS)\n");
dfs(tree);

console.log("\nBreadth-first search (BFS)\n");
bfs(tree);