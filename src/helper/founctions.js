export const textShortener = (name) => {
  const splitedName = name.split(" ");
  const newName = `${splitedName[0]} ${splitedName[1]} ${splitedName[2]}`;
  return newName;
};

export const dateShortener = (date) => {
  const splitedDate = date.split("T");
  const newDate = `${splitedDate[0]} | ${timeShortener(splitedDate[1])}`;
  return newDate;
}

export const timeShortener =(time)=>{
  const splitedTime = time.split(":");
  const newTime = `${splitedTime[0]}:${splitedTime[1]}`;
  return newTime;
}

export const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item["_id"] === id);
  return result;
};

export const quantityCount = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item["_id"] === id);
  if (index === -1) {
    return false;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const totalPrice = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter, totalPrice };
};

export const validate = (data, type) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
  const passwordRegex = (p) => {
    return (
      /[A-Z]/.test(p) &&
      /[a-z]/.test(p) &&
      /[0-9]/.test(p) &&
      /^[A-Za-z0-9]{8,10}$/.test(p)
    );
  };
  const mobileRegex = /(0|\+98)?([ ]|-|[()]){0,2}9[0|1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/ig;

  const errors = {};
  if (type === "login" || type === "signup" || type === "edit" ) {
    if (!data.email) {
      errors.email = "Email required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }

    if (!data.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex(data.password)) {
      errors.password =
        "The password requires 8 to 10 characters, uppercase and lowercase letters and a number!";
    } else {
      delete errors.password;
    }
  }

  if (type === "signup" || type === "edit") {
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }
  }

  if (type === "signup") {
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  if (type === "shipping") {
    if (!data.phone.trim()) {
      errors.phone = "Please enter your mobile number";
    }else if (!mobileRegex.test(data.phone)){
      errors.phone = "Please enter a valid mobile number";
    } else {
      delete errors.phone;
    }

    if (!data.postalCode.trim()) {
      errors.postalCode = "Please enter your postalCode";
    } else {
      delete errors.postalCode;
    }

    if (!data.city.trim()) {
      errors.city = "Please enter the name of your city";
    } else {
      delete errors.city;
    }

    if (!data.address.trim()) {
      errors.address = "Please type your full address";
    } else {
      delete errors.address;
    }
  }

  return errors;
};

export const orderItemsFn = (selectedItems) =>
  selectedItems.map((item) => ({
    product: item["_id"],
    name: item.name,
    image: item.image,
    price: item.price,
    countInStock: item.countInStock,
    qty: item.quantity,
  }));
