import request from 'superagent'

export const ALL_IMAGES = 'ALL_IMAGES'
export const NEW_IMAGE = 'NEW_IMAGE'
export const JWT = 'JWT'

const baseUrl = 'http://localhost:4000'

function allImages (payload) {
  return {
    type: ALL_IMAGES,
    payload
  }
}

export const getImages = () => (dispatch, getState) => {
  const state = getState()
  const { images } = state

  if (!images.length) {
    request(`${baseUrl}/image`)
      .then(response => {
          console.log('BODY:', response.body)
        const action = allImages(response.body)

        dispatch(action)
      })
      .catch(console.error)
  }
}


function newImage (payload) {
  return {
    type: NEW_IMAGE,
    payload
  }
}

export const createImage = data => (dispatch, getState) => {
    const state = getState()
    const { user } = state
  
    request
      .post(`${baseUrl}/image`)
      .set('Authorization', `Bearer ${user}`)
      .send(data)
      .then(response => {
        const action = newImage(response.body)
  
        dispatch(action)
      })
      .catch(console.error)
}

function loginUser(payload){
    return {
        type: JWT,
        payload
    }
}

export const login = (email, password) => dispatch=>{
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(response => {
            console.log('LOGIN:', response.body)
            const action = loginUser(response.body.jwt)
      
            dispatch(action)
          })
          .catch(console.error)
}

// export const login = (username, password) => {
//     return dispatch => {
//         request({ username }));

//         user.login(username, password)
//             .then(
//                 user => { 
//                     dispatch(loginUser(user));
//                 },
//                 error => {
//                     console.log(error)
//                 }
//             )
//         }
// }