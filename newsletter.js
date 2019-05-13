class Newsletter {
    constructor () {
        this.subscribeButton = document.querySelector("#subscribe_id");
        this.unsubscribeButton = document.querySelector("#unsubscribe_id");
        this.mailingList = document.querySelector("#mailing_list_id");
        this.mailingListButton = document.querySelector("#mailingListButton_id");
        this.renderSubscribe();
        this.renderUnsubscribe();
        this.renderCopyButton();
    }

    renderCopyButton () {
        document.querySelector('.copyButton').addEventListener('click',this.copyToClipboard.bind(this));
    }

    copyToClipboard () {
        document.querySelector('#mailing_list_id').select();
        document.execCommand("copy");
        document.querySelector('.copyButton').textContent = 'Emails are copied onto clipboard! Ctrl + V to paste'
    }

    renderSubscribe () {
        this.subscribeButton.addEventListener('click', this.handleSubmit.bind(this, 'sub'));
    }

    renderUnsubscribe () {
        this.unsubscribeButton.addEventListener('click', this.handleSubmit.bind(this, 'unsub'));
    }

    handleSubmit (type) {
        const input = document.querySelector('#newsletter_input_id');
        if (!input.value.includes('@')) {
            alert('Please enter a real email address');
            return;
        }
        if(type === 'sub') {
            this.addEmail(input.value);
        } else if (type === 'unsub') {
            this.removeEmail (input.value);
        }
    }

    disableButton (button) {
        button.disabled = true;
        button.style.opacity = .8;
    }
}

const app4 = new Newsletter ();