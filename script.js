{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 \
    <script>\
        // Updated JavaScript for lead capture\
        function handleSubmit(event) \{\
            event.preventDefault();\
            const name = document.getElementById('name').value;\
            const email = document.getElementById('email').value;\
            \
            // Simulate lead capture\
            console.log(`New lead: $\{name\} - $\{email\}`);\
            \
            // Redirect to thank you page or show confirmation\
            window.location.href = '#home';\
            alert(`Thanks $\{name\}! I'll contact you within 15 minutes.`);\
            \
            event.target.reset();\
            return false;\
        \}\
\
        // Add smooth scroll for navigation\
        document.querySelectorAll('nav a').forEach(anchor => \{\
            anchor.addEventListener('click', function(e) \{\
                e.preventDefault();\
                const section = document.querySelector(this.getAttribute('href'));\
                section.scrollIntoView(\{ behavior: 'smooth' \});\
            \});\
        \});\
    </script>}