const projects = [
    {
      name: 'Runner Bay',
      description: 'A marketplace for UTSA students to buy and sell items. Built with React, Node.js, Express, and MySQL. This application was made as a final project for a Software Engineering course where we followed the Agile methodology. We had scrum meetings, sprint planning, and retrospectives. In our team of 4 developers, I was the lead developer and was responsible for the front-end and back-end development for the Listing page along with login and registration, user authentication. On the delopement side, I was responsible for the deployment of the application on AWS EC2 and RDS.',
      githubLink: 'https://github.com/jguerrero104/runner-bay',
      websiteLink: 'https://runnerbay.hopto.org/',
  
      images: [
        '/images/f898ef218d29997ddffa215b5fff290d.png',
        '/images/718dd5f952767d1fef53534d87f77171.png',
        '/images/694185093c9007ca305f9f8cbd1a96dd.png',
        '/images/bd3b914bf5a43228e59df78a789dd436.jpg'
        
      ]
    },
    {
      name: 'Pizza Guy Game',
      description: '2D pixel art game where you play as a pizza delivery guy. Built with Unity and C#.',
      githubLink: 'https://github.com/jguerrero104/PizzaGuyGame',
      images: [
        '/images/pizzaGuy1.png',
        '/images/CityGeneration.png',
        '/images/d93c959856daedb4117e142531a3590d.png'
      ]
    },
    {
      name: 'CPU Scheduler',
      description: 'A CPU scheduler simulator that uses FIFO, SJF, and PR algorithms to schedule processes and measure their performance metrics (i.e., CPU utilization, Throughput, Turnaround time, and Waiting time in Ready Queue). Built with C.',
      githubLink: 'https://github.com/jguerrero104/CPU-Scheduler',
      images: [
        '/images/CPU_scheduler1.png',
        '/images/CPU_scheduler2.png'
      ]

    },

    {
      name: 'Memory Management Simulator',
      description: `A simulator that implements the OS address translation and page replacement mechancisms.
      Part 1: Address Translation and I/O.
      Part 2: Virtual Memory
      Part 3: Making it adaptive(./part3 BytesPerPage SizeOfVirtualMemory SizeOfPhysicalMemory SequenceFile OutputFile)
      Built with C.`,
      githubLink:'https://github.com/jguerrero104/MemMangmentSim',
      images: [
        '/images/MemMan2.png',
        '/images/MemMang.png',
        '/images/MemMang1.png'

      ]
    },

    {
      name : 'Client-Server User Credential Verification',
      description: `A client-server application that verifies user credentials. The server checks if a username/email and/or password appears in a list of breached credentials using SHA-256 hashing for privacy. Built with C.`,
      githubLink: 'https://github.com/jguerrero104/Client-Server-UserCredVerfication',
      images: [
        '/images/Server-Client1.png',
        '/images/Server-Client2.png'
      ]
    },

    {
      name: 'Android Recipe Finder',
      description: 'An Android app that allows users to search for recipes by ingredients. Built with Java in Android Studio.',
      githubLink: 'https://github.com/jguerrero104/RecipeFinder-Android',
      images: [
        '/images/RecipeFinder1.png',
        '/images/RecipeFinder2.png',
        '/images/RecipeFinder3.png',
        '/images/RecipeFinder4.png'
      ]
    }

    
  ];
  
  export default projects;
  