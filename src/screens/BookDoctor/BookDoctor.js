import React, { Component } from "react";
import NavigationLayout from "../../components/Nav/NavigationLayout";
import UnderConstruction from "../../assets/images/UnderConstruction.jfif";

export class BookDoctor extends Component {
  render() {
    return <NavigationLayout>Book Doctor
       <img src={UnderConstruction} alt="Page Under Construction" />
    </NavigationLayout>;
  }
}

export default BookDoctor;
