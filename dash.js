const data = {
  pageViews: 13.79,
  visitors: 3.37,
  pagesPerVisitor: 5.1,
  pageViewsByDevice: {
    desktop: 70,
    mobile: 25,
    tablet: 5
  },
  pageViewsByChannel: {
    'Social Media': 500000,
    Referral: 1200000,
    Direct: 1800000,  
    Advertising: 2100000,
    Search: 1900000
  },
  visitorSessionsPageViews: [
    { month: 'Jan', visitors: 400000, sessions: 500000, pageViews: 600000 },
    { month: 'Feb', visitors: 450000, sessions: 550000, pageViews: 650000 },
    { month: 'Mar', visitors: 500000, sessions: 600000, pageViews: 700000 },
    { month: 'Apr', visitors: 550000, sessions: 650000, pageViews: 750000 },
    { month: 'May', visitors: 600000, sessions: 700000, pageViews: 800000 },
    { month: 'Jun', visitors: 650000, sessions: 750000, pageViews: 850000 },
    { month: 'Jul', visitors: 700000, sessions: 800000, pageViews: 900000 }
  ]
};

// Create the charts
const pageViewsChart = new Chart(document.getElementById('pageViewsChart'), {
  type: 'doughnut',
  data: {
    labels: ['Pages'],
    datasets: [
      {
        label: 'Pages',
        data: [data.pageViews],
        backgroundColor: ['#36a2eb']
      }
    ]
  }
});

const visitorSessionsChart = new Chart(document.getElementById('visitorSessionsChart'), {
  type: 'doughnut',
  data: {
    labels: ['Visitors', 'Pages/Visitor'],
    datasets: [
      {
        label: 'Visitors',
        data: [data.visitors, data.pagesPerVisitor],
        backgroundColor: ['#36a2eb', '#ff6384']
      }
    ]
  }
});

const pageViewsByDeviceChart = new Chart(document.getElementById('pageViewsByDeviceChart'), {
  type: 'pie',
  data: {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    datasets: [
      {
        label: 'Page Views by Device',
        data: [data.pageViewsByDevice.desktop, data.pageViewsByDevice.mobile, data.pageViewsByDevice.tablet],
        backgroundColor: ['#36a2eb', '#ff6384', '#ffcd56']
      }
    ]
  }
});

const pageViewsByChannelChart = new Chart(document.getElementById('pageViewsByChannelChart'), {
  type: 'bar',
  data: {
    labels: Object.keys(data.pageViewsByChannel),
    datasets: [
      {
        label: 'Page Views by Channel',
        data: Object.values(data.pageViewsByChannel),
        backgroundColor: '#36a2eb'
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const visitorSessionsPageViewsChart = new Chart(document.getElementById('visitorSessionsPageViewsChart'), {
  type: 'line',
  data: {
    labels: data.visitorSessionsPageViews.map(item => item.month),
    datasets: [
      {
        label: 'Visitors',
        data: data.visitorSessionsPageViews.map(item => item.visitors),
        borderColor: '#36a2eb',
        fill: false
      },
      {
        label: 'Sessions',
        data: data.visitorSessionsPageViews.map(item => item.sessions),
        borderColor: '#ff6384',
        fill: false
      },
      {
        label: 'Page Views',
        data: data.visitorSessionsPageViews.map(item => item.pageViews),
        borderColor: '#ffcd56',
        fill: false
      }
    ]
  }
});
