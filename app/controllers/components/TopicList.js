import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import TopicDetail from 'app/controllers/components/TopicDetail';

class TopicList extends Component {
  state = { topics: [] };

  componentWillMount() {
    axios.get('https://api.venny.io/v3/topics')
      .then(response => this.setState({ topics: response.data }));
  }

  renderTopics() {
    return this.state.topics.map(topic =>
      <TopicDetail key={topic.id} topic={id} />
    );
  }

  render() {
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderTopics()}
      </ScrollView>
    );
  }
}

export default TopicList;
