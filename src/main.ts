import 'normalize.css';
import 'milligram';

import './styles.css';

const makeHTML = (orderItem: OrderItem): HTMLElement => {
    const makeDiv = (...classes: string[]) => {
        const result = document.createElement('div');
        result.classList.add(...classes);
        return result;
    };

    const rowDiv = makeDiv('row');

    const nameColDiv = makeDiv('column', 'column-50');
    nameColDiv.appendChild(document.createTextNode(orderItem.name));
    rowDiv.appendChild(nameColDiv);

    const btnColDiv = makeDiv('column', 'column-50');
    rowDiv.appendChild(btnColDiv);

    const button = document.createElement('button');
    button.classList.add('button');
    button.appendChild(document.createTextNode('Order!'));
    btnColDiv.appendChild(button);

    return rowDiv;
};

class OrderItem {
    public constructor(public readonly name: string) { }

    public onOrder() {
        alert(`You're ordering: ${this.name}!`);
    }
}


const listContainer = document.getElementById('list-container');

['Pizza', 'Burgers', 'Pasta']
    .map((name) => new OrderItem(name))
    .forEach((orderItem) => { 
        const orderItemDiv = makeHTML(orderItem);

        // the problematic bit:
        orderItemDiv.addEventListener('click', orderItem.onOrder);

        listContainer.appendChild(orderItemDiv) 
    });
