import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import { removeFromCart, setIsCartOpen } from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + (item?.count || 0) * (item?.attributes?.price || 0);
  }, 0);

  const getImageUrl = (item) => {
    const baseUrl = process.env.REACT_APP_UPLOADS_URL || "http://localhost:1337";
    const imageUrl = item?.attributes?.image?.data?.attributes?.formats?.medium?.url
      ? `${baseUrl}${item.attributes.image.data.attributes.formats.medium.url}`
      : item?.attributes?.image?.data?.attributes?.url
      ? `${baseUrl}${item.attributes.image.data.attributes.url}`
      : "/default-image.jpg";
    
    return imageUrl;
  };

  return (
    <Box
      display={isCartOpen ? "block" : "none"}
      backgroundColor="rgba(0, 0, 0, 0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
    >
      <Box
        position="fixed"
        right="0"
        bottom="0"
        width={{ xs: "90%", sm: "max(400px, 30%)" }}
        height="100%"
        backgroundColor="white"
      >
        <Box padding="30px" overflow="auto" height="100%">
          <FlexBox mb="15px">
            <Typography variant="h3">SHOPPING BAG ({cart?.length || 0})</Typography>
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              aria-label="Close cart"
            >
              <CloseIcon />
            </IconButton>
          </FlexBox>

          <Box>
            {cart?.length ? (
              cart.map((item) => (
                <Box key={`${item?.attributes?.name || "item"}-${item?.id || Math.random()}`}>
                  <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                      <img
                        alt={item?.attributes?.name || "Item"}
                        width="100px"
                        height="100px"
                        src={getImageUrl(item)}
                        style={{ objectFit: "cover" }}
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "/default-image.jpg";
                        }}
                      />
                    </Box>
                    <Box flex="1 1 60%">
                      <FlexBox mb="5px">
                        <Typography fontWeight="bold">
                          {item?.attributes?.name || "Unnamed Item"}
                        </Typography>
                        <IconButton
                          onClick={() => dispatch(removeFromCart({ id: item?.id }))}
                          aria-label={`Remove ${item?.attributes?.name || "item"}`}
                        >
                          <CloseIcon />
                        </IconButton>
                      </FlexBox>
                      <FlexBox>
                        <Typography>Qty: {item?.count || 1}</Typography>
                        <Typography fontWeight="bold" ml="10px">
                          €{item?.attributes?.price?.toFixed(2) || "0.00"}
                        </Typography>
                      </FlexBox>
                    </Box>
                  </FlexBox>
                </Box>
              ))
            ) : (
              <Typography textAlign="center" m="20px 0">
                Your cart is empty
              </Typography>
            )}
          </Box>

          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">€{totalPrice.toFixed(2)}</Typography>
            </FlexBox>
            <Button
              sx={{
                backgroundColor: shades.primary[400],
                color: "white",
                borderRadius: 0,
                minWidth: "100%",
                padding: "15px 30px",
                m: "20px 0",
              }}
              onClick={() => {
                navigate("/checkout");
                dispatch(setIsCartOpen({}));
              }}
              disabled={!cart?.length}
              aria-label="Proceed to checkout"
            >
              CHECKOUT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartMenu;