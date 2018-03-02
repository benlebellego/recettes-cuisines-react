import React from 'react';

class Connexion extends React.Component {

  goToApp = event => {
    event.preventDefault();
    //recup le pseudo
    const pseudo = this.boxInput.value;
    //changer url
    this.context.router.transitionTo(`/box/${pseudo}`);
  }

  render() {
    return(
      <div className="connexionBox">
        <form className="connexion" onSubmit={(e) => this.goToApp(e)} >
          <h1>Ma boite à Recettes</h1>
          <input type="text" placeholder="Nom du chef" pattern="[A-Za-z-]{1,}" required ref={(input) => {this.boxInput = input}} />
          <button type="submit">GO</button>
          <p>Pas de caractères spéciaux.</p>
        </form>
      </div>
    )
  }

  static contextTypes = {
    router: React.PropTypes.object
  }
}

export default Connexion;
