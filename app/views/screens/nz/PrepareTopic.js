//
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import NoteDetail from 'app/components/ab/NoteDetail';
import axios from 'axios';
import API from 'app/components/nz/API';

//
export default class PrepareNote extends React.Component {

  //
  state = { notes: [] };

  //
  componentWillMount() {
    category = 'notes.json';
    API.get('http://localhost/co-venny-www/includes/api/' + category)
      .then(response => this.setState({ notes: response.data })
    );
  }

  //
  renderNotes() {
    return this.state.notes.map(note =>
      <NoteDetail key={note.id} note={note} />
    );
  }

  //
  render() {

    //
    return (

      /* */
      <ScrollView>

        {this.renderNotes()}

        /* Dashboard */
        <View style={[styles.dashboard]}>

          /* */
          <View style={[styles.left]}>
            <Text style={[styles.wireframe]}>Filter by:</Text>
          </View>

          /* */
          <ScrollView style={[styles.right]} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={[styles.blip]} title={'February 21'} onPress={() => { }}><Text style={[styles.blipText]}>February 21</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.blip]} title={'February 14'} onPress={() => { }}><Text style={[styles.blipText]}>February 14</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.blip]} title={'February 7'} onPress={() => { }}><Text style={[styles.blipText]}>February 7</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.blip]} title={'January 31'} onPress={() => { }}><Text style={[styles.blipText]}>January 31</Text></TouchableOpacity>
          </ScrollView>

        </View>

        /* */
        <View style={[styles.wireframe]}>

          /* */
          <View style={[styles.wireframe]}>

            /* */
            <View style={[styles.wireframe]}>
              <Text style={[styles.wireframe]}>February 21</Text>
            </View>

            /* */
            <View style={[styles.wireframe] }>
              <Text style={[styles.wireframe]}>We need to see comps for gift center, mobile and express renew</Text>
              <Text style={[styles.wireframe]}>Add member # to confirmation page summary as well as in the header.</Text>
              <Text style={[styles.wireframe]}>No edit button on the confirmation page</Text>
              <Text style={[styles.wireframe]}>Any "Make default" option is only if you are logged in?</Text>
              <Text style={[styles.wireframe]}>We are asking for email address on the checkout page but shouldn't</Text>
              <Text style={[styles.wireframe]}>what's the Address dropdown flow? What if user want's to edit?</Text>
              <Text style={[styles.wireframe]}>Billing Address shouldn't have a dropdown for a guest.</Text>
              <Text style={[styles.wireframe]}>Sign Up and Sign in flow still outstanding</Text>
              <Text style={[styles.wireframe]}>The Gifting flow hasn't been walked through.</Text>
              <Text style={[styles.wireframe]}>Add OAUTH!!! It's needed</Text>
              <Text style={[styles.wireframe]}>Will adding the promotion code add the new value in the summary below?</Text>
              <Text style={[styles.wireframe]}>No breadcrumbs before checkout</Text>
              <Text style={[styles.wireframe]}>Add to Cart button should move the user the next page and not just add an item to minicart.</Text>
            </View>

          </View>

          /* */
          <View style={styles.wireframe}>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>February 14</Text>
            </View>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>We need to see comps for gift center, mobile and express renew</Text>
              <Text style={styles.wireframe}>Add member # to confirmation page summary as well as in the header.</Text>
              <Text style={styles.wireframe}>No edit button on the confirmation page</Text>
              <Text style={styles.wireframe}>Any "Make default" option is only if you are logged in?</Text>
              <Text style={styles.wireframe}>We are asking for email address on the checkout page but shouldn't</Text>
              <Text style={styles.wireframe}>what's the Address dropdown flow? What if user want's to edit?</Text>
              <Text style={styles.wireframe}>Billing Address shouldn't have a dropdown for a guest.</Text>
              <Text style={styles.wireframe}>Sign Up and Sign in flow still outstanding</Text>
              <Text style={styles.wireframe}>The Gifting flow hasn't been walked through.</Text>
              <Text style={styles.wireframe}>Add OAUTH!!! It's needed</Text>
              <Text style={styles.wireframe}>Will adding the promotion code add the new value in the summary below?</Text>
              <Text style={styles.wireframe}>No breadcrumbs before checkout</Text>
              <Text style={styles.wireframe}>Add to Cart button should move the user the next page and not just add an item to minicart.</Text>
            </View>

          </View>

          /* */
          <View style={styles.wireframe}>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>February 7</Text>
            </View>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>We need to see comps for gift center, mobile and express renew</Text>
              <Text style={styles.wireframe}>Add member # to confirmation page summary as well as in the header.</Text>
              <Text style={styles.wireframe}>No edit button on the confirmation page</Text>
              <Text style={styles.wireframe}>Any "Make default" option is only if you are logged in?</Text>
              <Text style={styles.wireframe}>We are asking for email address on the checkout page but shouldn't</Text>
              <Text style={styles.wireframe}>what's the Address dropdown flow? What if user want's to edit?</Text>
              <Text style={styles.wireframe}>Billing Address shouldn't have a dropdown for a guest.</Text>
              <Text style={styles.wireframe}>Sign Up and Sign in flow still outstanding</Text>
              <Text style={styles.wireframe}>The Gifting flow hasn't been walked through.</Text>
              <Text style={styles.wireframe}>Add OAUTH!!! It's needed</Text>
              <Text style={styles.wireframe}>Will adding the promotion code add the new value in the summary below?</Text>
              <Text style={styles.wireframe}>No breadcrumbs before checkout</Text>
              <Text style={styles.wireframe}>Add to Cart button should move the user the next page and not just add an item to minicart.</Text>
            </View>

          </View>

          /* */
          <View style={styles.wireframe}>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>January 31</Text>
            </View>

            /* */
            <View style={styles.wireframe}>
              <Text style={styles.wireframe}>We need to see comps for gift center, mobile and express renew</Text>
              <Text style={styles.wireframe}>Add member # to confirmation page summary as well as in the header.</Text>
              <Text style={styles.wireframe}>No edit button on the confirmation page</Text>
              <Text style={styles.wireframe}>Any "Make default" option is only if you are logged in?</Text>
              <Text style={styles.wireframe}>We are asking for email address on the checkout page but shouldn't</Text>
              <Text style={styles.wireframe}>what's the Address dropdown flow? What if user want's to edit?</Text>
              <Text style={styles.wireframe}>Billing Address shouldn't have a dropdown for a guest.</Text>
              <Text style={styles.wireframe}>Sign Up and Sign in flow still outstanding</Text>
              <Text style={styles.wireframe}>The Gifting flow hasn't been walked through.</Text>
              <Text style={styles.wireframe}>Add OAUTH!!! It's needed</Text>
              <Text style={styles.wireframe}>Will adding the promotion code add the new value in the summary below?</Text>
              <Text style={styles.wireframe}>No breadcrumbs before checkout</Text>
              <Text style={styles.wireframe}>Add to Cart button should move the user the next page and not just add an item to minicart.</Text>
            </View>

          </View>

        </View>

      </ScrollView>

    );
  }
}
