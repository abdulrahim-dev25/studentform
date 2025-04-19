
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentform');
    const tableBody = document.querySelector('#studenttable tbody');
    const saveButton = document.getElementById('btnsave');

    saveButton.addEventListener('click', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
        const course = document.querySelector('#course select').value;
        const email = document.getElementById('email').value;

        // Simple validation
        if (!name || !age || !gender || !course || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Create new row
        const row = document.createElement('tr');

        row.innerHTML = `
            <td style="padding: 10px; margin: 5px;">${name}</td>
            <td style="padding: 10px; margin: 5px;">${age}</td>
            <td style="padding: 10px; margin: 5px;">${gender}</td>
            <td style="padding: 10px; margin: 5px;">${course}</td>
            <td style="padding: 10px; margin: 5px;">${email}</td>
            <td style="padding: 10px; margin: 5px;">
                <button class="delete-btn" style="background-color: crimson; color: white; padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer;">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);

        // Reset form
        form.reset();
    });

    // Event delegation for delete buttons
    tableBody.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            const row = e.target.closest('tr');
            row.remove();
        }
    });
});

