import React,{Component} from 'react';
import Layout  from '../src/Components/Layout/Layout'
const withLayout=Innercomponent=>{
  return  class withLayout extends Component{
    //   constructor(props){
    //       super(props);
    //   }
      render(){
          return (
            <Layout>
              <Innercomponent {...this.props} />
            </Layout>
          ) 
      }
  }
}

export default withLayout;