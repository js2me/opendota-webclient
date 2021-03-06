import * as React from 'react';
import './style.scss';
import {TagCloud} from "react-tagcloud";
import axios from 'axios';


export namespace PlayerWordCloud {
  export interface Props {
    playerId: number
  }

  export interface State {
    words: Array<Word>
  }
}

declare interface Word {
  value: string,
  count: number
}


export default class PlayerWordCloud extends React.Component<PlayerWordCloud.Props, PlayerWordCloud.State> {
  state = {
    words: []
  };
  isMount = false;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.playerId) {
      axios.get(`https://api.opendota.com/api/players/${this.props.playerId}/wordcloud`).then((response) => {
        if(this.isMount && response.config.url.indexOf(this.props.playerId+'') !== -1){
          this.setState({
            words: Object.keys(response.data.my_word_counts).map(key => ({
              value: key,
              count: response.data.my_word_counts[key]
            }))
          });
        }
      });
    }
  }
  componentDidMount(){
    this.isMount=true;
  }

  componentWillUnmount(){
    this.isMount=false;
  }

  colorOptions= {
    luminosity: 'light'
  };

  render() {
    return (
      <TagCloud minSize={15}
                maxSize={87}
                shuffle={false}
                colorOptions={this.colorOptions}
                className={`tag-cloud ${this.state.words.length && 'show'}`}
                tags={this.state.words}
      />
    )
  }
}
