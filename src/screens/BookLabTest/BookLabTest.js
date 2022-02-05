import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import UnderConstruction from "../../assets/images/UnderConstruction.jfif";

class BookLabTest extends Component {
  render() {
    return <NavigationLayout>Book lab test page
     <img src={UnderConstruction} alt="Page Under Construction" />
    </NavigationLayout>;
  }
}

export default BookLabTest;
