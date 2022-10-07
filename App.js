//import logo from './logo.svg';
import './pzcss.css';
import React from 'react';

class PZCC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Character was submited: ' + this.state.value);
    event.preventDefault();
  }


  
   

  render() {
    return(
  <div className='mycss'>
<h1>PZCC</h1>
  <form onSubmit={this.handleSubmit}>
  
  <label>
    First Name:
    <input
    name="firstName"
    type="text"
    value={this.state.firstName}
    onChange={this.handleInputChange}
    required
    placeholder="Input first Name" />
  </label>

  <label>
    DOB:
    <input
    name="dateOfBirth"
    type="text"
    value={this.state.firstName}
    onChange={this.handleInputChange}
    required
    placeholder="What year was your character born in?" />
  </label>

<label>
Nickname:
  <input 
name="occupation"
type ="text"
value={this.state.numberofGuests}
onChange={this.handleInputChange} />
</label>

<label>
    Last Name:
    <input
    name="lastName"
    type="text"
    value={this.state.lastName}
    onChange={this.handleInputChange}
    required
    placeholder="Input last Name" />
</label>
      <br></br>
      <br></br>
<label>
    Backgound:
    <input
    name="backgound"
    type="text"
    style={{ width: "400px" }}
    value={this.state.lastName}
    onChange={this.handleInputChange}
    placeholder="Who is this character" />
</label>
<br></br>
<br></br>
<label>
Occupation:
</label>

  <select>
  <option value="Unemployed">Unemployed</option>
  <option value="Fire Officer	">Fire Officer	</option>
  <option value="Police Officer	">Police Officer	</option>
  <option value="Park Ranger	">Park Ranger	</option>
  <option value="Construction Worker">Construction Worker</option>
  <option value="Security Guard	">Security Guard	</option>
  <option value="Carpenter">Carpenter</option>
  <option value="Burglar">Burglar</option>
  <option value="Chef">Chef</option>
  <option value="Repairman">Repairman</option>
  <option value="Farmer">Farmer</option>
  <option value="Fisherman">Fisherman</option>
  <option value="Doctor">Doctor</option>
  <option value="Veteran">Veteran</option>
  <option value="Nurse">Nurse</option>
  <option value="Lumberjack">Lumberjack</option>
  <option value="Fitness Instructor">Fitness Instructor</option>
  <option value="Burger Flipper">Burger Flipper</option>
  <option value="Electrician">Electrician</option>
  <option value="Engineer">Engineer</option>
  <option value="Metalworker">Metalworker</option>
  <option value="Mechanic">Mechanic</option>
  </select>


<br></br>
<br></br>

<p> What type of weaponry do they use?</p>

<label>
  <input 
  name="guns"
  type="checkbox"
  checked={this.state.guns}
  onChange={this.handleInputChange} />

  Do they use Guns?
</label>
<br></br>
<label>
  <input 
  name="melee"
  type="checkbox"
  checked={this.state.melee}
  onChange={this.handleInputChange} />

  Do they use melee weapons?
</label>

<p> What type of armour do they wear?</p>

<label>
  <input 
  name="Light"
  type="checkbox"
  checked={this.state.Light}
  onChange={this.handleInputChange} />

  Light
</label>
<br></br>
<label>
  <input 
  name="medium"
  type="checkbox"
  checked={this.state.medium}
  onChange={this.handleInputChange} />

  Medium
</label>

<br></br>
<label>
  <input 
  name="heavy"
  type="checkbox"
  checked={this.state.heavy}
  onChange={this.handleInputChange} />

  Heavy
</label>

  <br></br>
      <input type="submit" value="submit" />
      </form>
  </div>
  

    );/* end of return */
    
}// end of render

}//end of entire class


function App() {
  return (
    <PZCC />
  );
}

export default App;
