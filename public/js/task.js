(function() {
    $(document).ready(function() {
        var loadTasks = function() {
            $.getJSON({
                url: '/api/task',
                success: function (data) {
                    var itemTemplate = function (itemData) {
                        var item = document.createDocumentFragment();
                        var itemLink = document.createElement('a');
                        var itemTitle = document.createElement('h4');
                        var itemText = document.createElement('p');
                        var itemDue = document.createElement('small');

                        itemLink.attributes.href = '#';
                        itemTitle.attributes.class = 'list-group-item-heading';
                        itemText.attributes.class = 'list-group-item-text';

                        itemTitle.textContent = itemData.name;
                        itemText.textContent = itemData.description;
                        itemDue.textContent = itemData.due_at;

                        itemText.appendChild(document.createElement('br'));
                        itemText.appendChild(itemDue);

                        itemLink.appendChild(itemTitle);
                        itemLink.appendChild(itemText);
                        item.appendChild(itemLink);

                        return item;
                    };

                    $.each(data, function (id, task) {
                        document.getElementById('task_list').appendChild(itemTemplate(task));
                    })
                }
            })
        };

        loadTasks();
    });
})();