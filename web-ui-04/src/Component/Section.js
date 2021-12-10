import React, { Component } from 'react'
import {Row,Container,Col,Button} from 'reactstrap'
import image1 from '../images/image1.svg'
import dwIcon from '../images/dwIcon.svg'

export default class Section extends Component {
    render() {
        return (
            <div>
               <Row xs='2'>
               <Container>
                   <Col style={{
                       marginLeft:'34%',
                       marginRight:'20%',
                   }}>
                   <h1 style={{
                       marginTop:'50%',
                       fontSize:'4rem',
                       color:'#511D5A',
                   }} >Manage your finances simply and easily.</h1>

                   <p style={{
                       color:'grey'
                   }} >Detected application for finance systems for you costume and company</p>

                   <Button style={{
                       marginTop:'20px',
                       borderRadius:'30px',
                       backgroundColor:'#3F2743',
                       paddingLeft:'40px',
                       paddingRight:'40px',
                       paddingTop:'10px',
                       paddingBottom:'10px',
                       fontSize:'2rem',
                       borderColor:'#3F2743',
                       boxShadow:'30px 20px 50px 10px #C7C1CD'
                   }} >Download <img src={dwIcon} alt='...' height='50px' width='50px' /> </Button>
                   </Col>    
               </Container>
               <Container>
                   <img src={image1} height='100%' width='80%' style={{
                       marginTop:'50px',
                   }} />
               </Container>
               </Row>
            </div>
        )
    }
}
