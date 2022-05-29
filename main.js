let tasgTotal = 0;

start();

function addTag() {
    let tagsString = document.getElementById('input').value;

    if (/\s/.test(tagsString) || tagsString != ' ') {
        let tagsArr = tagsString.split(' ');

        for (let a = 0; a < tagsArr.length; a++) {
            if (tagsArr[a]) {
                createTags(tagsArr[a]);
            }
        }

    } else {
        createTags(tagsString);
    }

    document.getElementById('input').value = ' ';
}

function createTags(tagsString) {
    let newElement = document.createElement('li');
    let button = document.createElement('button');
    let liID = tasgTotal + 1;

    localStorage.setItem(liID, tagsString)
    liID = 'li' + liID;
    newElement.setAttribute('id', liID)
    newElement.innerHTML = tagsString;
    ulId.append(newElement);
    button.addEventListener('click', deleteTag)
    button.setAttribute('id', `${++tasgTotal}`)
    button.innerHTML = 'x';
    ulId.lastChild.append(button);
}

function start() {
    if (localStorage.length != 0) {
        let keys = Object.keys(localStorage);

        for (let key of keys) {
            tasgTotal = localStorage.length - 1;
            let localItem = localStorage.getItem(key);
            let liFirst = document.createElement('li');
            let button = document.createElement('button');
            let liId = tasgTotal + 1;

            liId = 'li' + key;
            liFirst.innerHTML = localItem;
            liFirst.setAttribute('id', liId);
            ulId.append(liFirst);
            button.addEventListener('click', deleteTag)
            button.className = 'liButton'
            button.setAttribute('id', key)
            button.innerHTML = 'x';
            ulId.lastChild.append(button);
        }
    }
}

function deleteTag(event) {
    let target = event.target;
    let deleteItemId = target.id;

    target.parentNode.remove();
    localStorage.removeItem(deleteItemId)
}

function read(event) {
    let target = document.getElementById(event);
    let buttons = document.getElementsByTagName('button');

    if (event == 'true') {
        target.id = 'false';

        for (let a = 0; a < buttons.length; a++) {
            buttons[a].disabled = true;
        }

    } else {
        target.id = 'true';

        for (let a = 0; a < buttons.length; a++) {
            buttons[a].disabled = false;
        }

    }
}

function clearTags() {
    let ss = document.getElementById('ulId');

    localStorage.clear();

    while (ss.firstChild) {
        ss.removeChild(ss.firstChild);
    }

}
