import { Link } from "react-router-dom";

class LayOut {
    constructor(navbarFontColor, navbarBackColor,navbarBorderColor,navbarBrand){
        this.navbarFontColor = navbarFontColor;
        this.navbarBackColor = navbarBackColor;
        this.navbarBorderColor = navbarBorderColor;
        this.navbarBrand = {uri:navbarBrand.uri, text:navbarBrand.text}
    }
    getTheme = () => {
      //console.log(this.navbarBrand)

        return {
          brand : <Link to={this.navbarBrand.uri}> {this.navbarBrand.text} </Link>,
          backColor : this.navbarBackColor,
          color : this.navbarFontColor,
          borderColor : this.navbarBorderColor
        };
      };
}
class Content {
    constructor(navbarParent, navbarChildren){
        this.navbarParent = navbarParent;
        this.navbarChildren = navbarChildren;
    }
    getContent = () => {
        return {
          parent : this.navbarParent,
          children : this.navbarChildren
        };
      };
}

export {LayOut, Content}