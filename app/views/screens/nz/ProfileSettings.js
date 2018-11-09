//
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import styles from 'app/assets/styles/nz/ux';
import AccountClosure from 'app/components/nz/AccountClosure';
import AccountSignOut from 'app/components/nz/AccountSignOut';
import FormUpdatePassword from 'app/components/nz/FormUpdatePassword';
import FormUpdatePrivacy from 'app/components/nz/FormUpdatePrivacy';
import FormUpdateDetails from 'app/components/nz/FormUpdateDetails';
import FormUpdateProfileImage from 'app/components/nz/FormUpdateProfileImage';

//
export default class ProfileSettings extends React.Component {

  //
  render() {

    return (

      <ScrollView>

        /* Sign Out */
        <AccountSignOut />

        /* Profile Image */
        <FormUpdateProfileImage />

        /* Name */
        <FormUpdateDetails />

        /* Privacy */
        <FormUpdatePrivacy />

        /* Update Password */
        <FormUpdatePassword />

        /* Close Account */
        <AccountClosure />

        /* Instagram

          EDIT PROFILE
          Change Photo
          Name
          Username
          Website
          Bio

          PRIVATE INFORMATION
          Email
          Phone
          Gender

          SETTINGS
          Account - Follow People - Facebook Friends
          Account - Follow People - Contacts
          Account - Password
          Account - Posts You've Liked
          Account - Search History
          Account - Language
          Privacy & Security - Blocked Accounts
          Privacy & Security - Activity Status
          Privacy & Security - Data Download
          Privacy & Security - Contacts Syncing
          Notifications - Push Notifications
          Notifications - Email and SMS Notifications
          Support - Help Center
          Support - Report a Problem
          Logins - Log Out of sonofadolphus

        */

    </ScrollView>
    );
  }
}
