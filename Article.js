// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  constructor (title, author, text) {
    
    super(title, author, text) ;
    // Send what it gets to its parent object
  }

  render () {
    // Return HTML with the title, author, and text of this article
    // Use template literals for the variables
    return (`
      <Article>
        ${this.props.title.render()}
        <div>${this.props.text}</div>
        <span>${this.props.author}</span>
    
      </Article>
    `
    ); 
    
  }

}

module.exports = Article;
