document.addEventListener('DOMContentLoaded', function() {
   
    const policies = [
        { id: 1, name: 'Policy A', status: 'Active' },
        { id: 2, name: 'Policy B', status: 'Inactive' },
        { id: 3, name: 'Policy C', status: 'Active' }
    ];

    const tbody = document.querySelector('table tbody');
    policies.forEach(policy => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${policy.id}</td>
            <td>${policy.name}</td>
            <td>${policy.status}</td>
            <td><button class="btn btn-info btn-sm" onclick="viewPolicy(${policy.id})">View</button></td>
        `;
        tbody.appendChild(row);
    });

    document.getElementById('policyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('policyName').value;
        const status = document.getElementById('policyStatus').value;
        
        console.log(`New Policy - Name: ${name}, Status: ${status}`);
       
        const modal = bootstrap.Modal.getInstance(document.getElementById('policyModal'));
        modal.hide();
    });
});

function viewPolicy(id) {
  
    const policy = { id, name: `Policy ${id}`, status: 'Active' }; // Example data
    alert(`Viewing Policy - ID: ${policy.id}, Name: ${policy.name}, Status: ${policy.status}`);
}
