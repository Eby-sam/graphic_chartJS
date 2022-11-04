import '/node_modules/chart.js/dist/chart.js';

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'cyan', 'Purple', 'green'],
        datasets: [{
            label: '# of Votes',
            data: [8],
            backgroundColor: [
                'rgba(255,0,53,0.23)'
            ],
        },{
            label: '# of Votes',
            data: [2],
            backgroundColor: [
                'rgba(0,21,255,0.23)'
            ],
        },{
        tro_datasets: [{
            label: '# of Votes',
            data: [4],
            backgroundColor: [
                'rgba(94,255,0,0.23)'
            ],
        },{
        qua_datasets: [{
            label: '# of Votes',
            data: [7],
            backgroundColor: [
                'rgba(191,0,255,0.23)'
            ],
        },{
        cin_datasets: [{
            label: '# of Votes',
            data: [4],
            backgroundColor: [
                'rgba(255,213,0,0.23)'
            ],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
