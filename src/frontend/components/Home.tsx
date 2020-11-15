import * as React from 'react';
import { Component } from 'react';

export interface HomeState {
  name: string;
  password: string;
}
// export const Home = (props): JSX.Element => {
//     return props.items.map(item => <li>{item}</li>);
// }

export class Home extends Component<unknown, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = { name: null, password: null };
  }

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.name,
        }),
      );
  }

  onEnter(e: any) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      console.log('enter pressed', this.state.password);
      this.sendPassword();
    }
  }

  sendPassword() {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: this.state.password }),
    }).then((data) => console.log(data));
  }

  render() {
    const { name } = this.state;
    return (
      <>
        {name ? (
          <div className='container-fluid'>
            <div className='row'>
              <div className='hidden-xs hidden-sm col-md-5 col-lg-5'>
                <div id='crop'>
                  <img src='public/headshot.jpg' />
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-7 col-lg-7'>
                <div id='info'>
                  <h1>{name}</h1>
                  <p>Student of the web</p>
                  <ul>
                    <a href='https://google.com'>
                      <li>About &rsaquo;</li>
                    </a>
                    <a href=''>
                      <li>LinkedIn &rsaquo;</li>
                    </a>
                    <a href=''>
                      <li>Resume &rsaquo;</li>
                    </a>
                    <a href=''>
                      <li>Github &rsaquo;</li>
                    </a>
                  </ul>
                </div>
              </div>
              <input
                onChange={(e) => this.setState({ password: e.target.value })}
                onKeyUp={(e) => this.onEnter(e)}
                onBlur={(e) => e.target.focus()}
                autoFocus
                id='passwordField'
                type='password'
              />
            </div>
          </div>
        ) : (
          <img src='https://media.tenor.com/images/a2f6ac8e2cdbd45de1559928f85b1a6a/tenor.gif' />
        )}
      </>
    );
  }
}
