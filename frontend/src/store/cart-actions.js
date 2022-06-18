import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (cart) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:8000/`)

            if (!response.ok) {
                throw new Error("Fetching cart data failed.");
              }

            const data = await response.json();
            console.log(data)
            return data
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
              cart: cartData || [],
            }));
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Fetching cart data failed.",
                })
              );
        }


    }
}


// ACTION CREATOR THUNK
export const sendCartData = (cart) => {
    return async (dispatch) => {

      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
  
      const sendRequest = async () => {
        const response = await fetch(`http://localhost:8000/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart.cart),
        });
  
        if (!response.ok) {
          throw new Error("Sending cart data failed.");
        }
      };
  
      try {
        await sendRequest();

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
          dispatch(
              uiActions.showNotification({
                status: "error",
                title: "Error!",
                message: "Sending cart data failed.",
              })
            );
      }
    };
  };

