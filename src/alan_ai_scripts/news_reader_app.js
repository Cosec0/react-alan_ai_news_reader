
intent('What does this app do?', 'What can I do here?', 
      reply('This is a news reader application. the front-end is built using React, News API is used to fetch the news and I, Alan AI as the chat bot for reading those'));

const NEWS_API_KEY = '5a69bde74f9245df9145d8e41159761c';
let savedArticles = [];

//Latest news
intent('Give me the (latest|recent) news', 'What are the (latest|recent) news}', p => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${NEWS_API_KEY}`;
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        if(error) {
           p.play(error); 
        }
        
        if(!articles.length) {
            p.play('There has been an issue it seems. Please try again after sometime');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newsHeadlines', articles });
        p.play('Here are the (latest|recent) news');
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    })
})


//News by Source
intent('Give me the news from $(source* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}`;
    
    if(p.source.value) {
        NEWS_API_URL = `${NEWS_API_URL}&sources=${p.source.value.toLowerCase().split(" ").join('-')}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for news from a different source');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newsHeadlines', articles });
        p.play(`Here are the (latest|recent) ${p.source.value}.`);
  
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
})


// News by Term
intent('what\'s up with $(term* (.*))', (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/everything?apiKey=${NEWS_API_KEY}`;
    
    if(p.term.value) {
        NEWS_API_URL = `${NEWS_API_URL}&q=${p.term.value}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for something else.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newsHeadlines', articles });
        p.play(`Here are the (latest|recent) articles on ${p.term.value}.`);
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
})


// News by Categories
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
const CATEGORIES_INTENT = `${CATEGORIES.map((category) => `${category}~${category}`).join('|')}`;

intent(`(show|what is|tell me|what's|what are|what're|read) (the|) (recent|latest|) $(N news|headlines) (in|about|on|) $(C~ ${CATEGORIES_INTENT})`,
  `(read|show|get|bring me|give me) (the|) (recent|latest) $(C~ ${CATEGORIES_INTENT}) $(N news|headlines)`, (p) => {
    let NEWS_API_URL = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_API_KEY}&country=in`;
    
    if(p.C.value) {
        NEWS_API_URL = `${NEWS_API_URL}&category=${p.C.value}`
    }
    
    api.request(NEWS_API_URL, (error, response, body) => {
        const { articles } = JSON.parse(body);
        
        if(!articles.length) {
            p.play('Sorry, please try searching for a different category.');
            return;
        }
        
        savedArticles = articles;
        
        p.play({ command: 'newsHeadlines', articles });
        
        if(p.C.value) {
            p.play(`Here are the (latest|recent) articles on ${p.C.value}.`);        
        } else {
            p.play(`Here are the (latest|recent) news`);   
        }
        
        p.play('Would you like me to read the headlines?');
        p.then(confirmation);
    });
});


//Reading news confirmation
const confirmation = context(() => {
    intent('yes', (p) => {
        for(let i = 0; i < 4; i++){
            p.play({ command: 'highlight', highlightedArticleIndex: i+1});
            p.play(`${savedArticles[i].title}`);
        }
        p.play('Would you like me to read more headlines?', 'Would you like me to continue?');
        p.then(secondConfirmation);
    })
    
    intent('no', (p) => {
        p.play('Sure, sounds good to me.')
    })
})


//Reading more news confirmation
const secondConfirmation = context(() => {
    intent('yes', (p) => {
        for(let i = 4; i < savedArticles.length; i++){
            p.play({ command: 'highlight', highlightedArticleIndex: i+1});
            p.play(`${savedArticles[i].title}`);
        }
    })
    
    intent('no', (p) => {
        p.play('Sure, sounds good to me.')
    })
})

//for opening a specific article
intent('open (the|) (article|) (number|) $(number* (.*))', (p) => {
    if(savedArticles.length) {
        if(p.number.value) {
            p.play({ command:'open', number: p.number.value, articles: savedArticles})
        }
    }
    else {
        p.play('You will have to load some news first. Try with one of the commands shown in the info cards.');
    }
    
})

//Go back to main menu command
intent('Go back', 'Go back to previous menu', 'Go to main menu', (p) => {
    p.play('Ok, going back');
    savedArticles = [];
    p.play({ command: 'goBack' });
})