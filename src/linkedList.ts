
export class LLNode {
    constructor(public value: number, public next: LLNode = null) {}
}

export class LinkedList {
    private first: LLNode;    
    private last: LLNode;
    get isEmpty(): boolean {
        return !this.first && !this.last;
    }

    count = 0;  
    get size(): number {
        return this.count;
    }

    addFirst(item: number): void {
        const node = new LLNode(item);

        if (this.isEmpty) {
            this.first = this.last = node;        
        } else {
            node.next = this.first;
            this.first = node;
        }

        this.count++;
    }

    removeFirst(): void {
        if (this.isEmpty) {
            throw new Error("List is empty");
        }

        if (this.first === this.last) {
            this.first = this.last = null;
        } else {
            const second = this.first.next;
            this.first.next = null;
            this.first = second;
        }

        this.count--;
    }

    addLast(item: number): void {
        const node = new LLNode(item);

        if (this.isEmpty) {
            this.first = this.last = node;
        } else {
            this.last.next = node;  
            this.last = node;
        }

        this.count++;
    }

    removeLast(): void {
        if (this.isEmpty) {
            throw new Error("List is empty");
        }

        if (this.first === this.last) {
            this.first = this.last = null;
        } else {
            const secondLast = this.getPrevious(this.last);
            secondLast.next = null;
            this.last = secondLast;
        }

        this.count--;
    }
    
    getPrevious(node: LLNode): LLNode {
        let current = this.first;
        while (current) {
            if (current.next === node){
                return current
            }
            current = current.next;
        }
        return null;
    }

    indexOf(item: number): number {
        let current = this.first;
        let index = 0;

        while (current != null) {
            if (current.value === item) {
                return index;
            }  
            current = current.next;
            index++;
        }

        return -1;
    }

    contains(item: number): boolean {
        return this.indexOf(item) > -1;
    }

    reverse(): void {
        if (this.isEmpty) {
            return;
        }

        /** My answer - not very efficient!*/
        // const last = this.first;
        // this.first = this.swapOrder(this.last);
        // this.last = last;

        /** Mosh's answer - much more efficient!*/
        let prev = this.first;
        let curr = this.first.next;
        while (curr != null) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        this.last = this.first;
        this.last.next = null;
        this.first = prev;
    }

    // swapOrder(node: LLNode): LLNode {
    //     let previous = this.getPrevious(node);
    //     if (previous) {
    //         previous.next = null;
    //         node.next = this.swapOrder(previous);
    //     }
    //     return node;
    // }

    getKthNodeFromTheEnd(k: number): number {
        // [10 -> 20 -> 30 -> 40 -> 50]
        //               *           *
        // k = 1 (50)
        // k = 2 (40)
        // 
        // Have 2 pointers, k-1 distance apart. 
        // when 2nd pointer gets to the end, the 1st pointer will be at the kth node

        let p1 = this.first;
        let p2 = this.first;

        for (let i = 0; i < k - 1; i++) {
            p2 = p2.next; 
        }

        while (p2 != this.last) {
            p1 = p1.next;
            p2 = p2.next;
        }

        return p1.value;
    }

    getMiddleValue(): number[] {
        let p1 = this.first;
        let p2 = this.first;

        while (p2 != this.last && p2.next != this.last) {
            p2 = p2.next.next;
            p1 = p1.next;
        }

        return p2 === this.last ? [p1.value] : [p1.value, p1.next.value];
    }

    print(): void {
        let toPrint = [];
        let current = this.first;

        while (current) {
            toPrint.push(current);
            current = current.next;
        }

        console.table(toPrint);
    }
 }


