
const form = document.querySelector('#exceptionForm');
const tableBody = document.querySelector('#tableBody');
const filterIssue = document.querySelector('#filterIssue');
const filterStatus = document.querySelector('#filterStatus');

// 1. Handle Form Submission [cite: 41, 42, 43, 46]
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const deliveryId = document.querySelector('#deliveryId').value;
    const customerName = document.querySelector('#customerName').value;
    const issueType = document.querySelector('#issueType').value;
    const priority = document.querySelector('input[name="priority"]:checked').value;

    const row = document.createElement('tr');
    if (priority === 'High') row.classList.add('high-priority');

    row.innerHTML = `
        <td>${deliveryId}</td>
        <td>${customerName}</td>
        <td class="issue-col">${issueType}</td>
        <td>${priority}</td>
        <td class="status-col">Open</td>
        <td>
            <button class="resolve-btn">Resolve</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);
    form.reset();
});

// 2. Handle Table Actions (Resolve/Delete) [cite: 56, 58, 62, 64]
tableBody.addEventListener('click', function(e) {
    const row = e.target.closest('tr');

    if (e.target.classList.contains('resolve-btn')) {
        row.querySelector('.status-col').textContent = 'Resolved';
        row.classList.add('resolved-row');
        e.target.disabled = true;
    }

    if (e.target.classList.contains('delete-btn')) {
        if (confirm("Are you sure you want to delete this record?")) {
            row.remove();
        }
    }
});

// 3. Handle Filters [cite: 65, 71, 72]
function filterTable() {
    const issueVal = filterIssue.value;
    const statusVal = filterStatus.value;
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach(row => {
        const rowIssue = row.querySelector('.issue-col').textContent;
        const rowStatus = row.querySelector('.status-col').textContent;

        const matchesIssue = issueVal === 'all' || rowIssue === issueVal;
        const matchesStatus = statusVal === 'all' || rowStatus === statusVal;

        row.style.display = matchesIssue && matchesStatus ? "" : "none";
    });
}

filterIssue.addEventListener('change', filterTable);
filterStatus.addEventListener('change', filterTable);