fetch('https://investor.meta.com/sidebar/', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include',
  body: JSON.stringify()
})

.then(res => res.json())
.then(data => console.log('Created:', data))
.catch(err => console.error('Creation failed:', err));

/**
User-agent: *
Crawl-delay: 10
Allow: /

User-agent: Eluta.ca
Crawl-delay: 60
Allow: /

User-agent: MS Search 6.0 Robot
Crawl-delay: 60
Allow: /

User-agent: gsa-crawler
Crawl-delay: 60
Allow: /

 */