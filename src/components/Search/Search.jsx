// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { IconButton, InputAdornment, TextField } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
// import { withStyles } from '@material-ui/core/styles';

// const styles = {
//     input: {
//         color: 'black',
//     }
// }

// class Search extends Component {

    

//     render() {
//         return(
//             <div class="search-container">
//                 <form className="search">
//                     {/* <input type="text" placeholder="Location" name="search" />
//                     <button>Search</button> */}
//                     {/* <TextField>
//                         <SearchBar
//                             inputStyle={{ backgroundColor: 'white' }}
//                             containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
//                             placeholderTextColor={'#g5g5g5'}
//                             placeholder={'Pritish Vaidya'}
//                         />
//                     </TextField> */}
                    
//                     <TextField
//                         label="Location"
//                         variant="outlined"
//                         className={this.props.classes.input}
//                         inputStyle={{ backgroundColor: 'white' }}
//                         containerStyle={{ backgroundColor: 'white', borderWidth: 1, borderRadius: 5 }}
//                         placeholderTextColor={'#g5g5g5'}
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment>
//                                     <IconButton>
//                                         <SearchIcon onClick={this.props.click} />
//                                     </IconButton>
//                                 </InputAdornment>
//                             )
//                         }}
//                     />
//                 </form>
//             </div>
//         )
//     }
// }

// export default withStyles(styles)(connect()(Search));