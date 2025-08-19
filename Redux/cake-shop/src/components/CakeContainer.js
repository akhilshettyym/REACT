import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    console.log("PROPS :", props);
    return (
        <>
            {props.numOfCakes !== 0 && (
                <div>
                    <h1>Number of cakes - {props.numOfCakes}</h1>
                    <button className='button' onClick={props.buyCake}>Buy Cake</button>
                </div>
            )}

            {props.numOfCakes === 0 && (
                <div>
                    <h2>Sorry !!! Cakes are out of stock...</h2>
                </div>
            )}
        </>
    )
}

const mapStateToProps = state => ({
        numOfCakes: state.cake.numOfCakes
    })

const mapDispatchToProps = dispatch => ({
        buyCake: () => dispatch(buyCake())
    })

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);