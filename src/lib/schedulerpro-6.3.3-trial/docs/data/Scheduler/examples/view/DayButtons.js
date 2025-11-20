const button = new DayButtons({
    appendTo : targetElement,
    value    : ['MO', 'TU', 'TH'],
    onAction() {
        Toast.show(`You selected ${this.value || 'no days'}`);
    }
});
