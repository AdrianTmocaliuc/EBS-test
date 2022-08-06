import Table from "components/Table";
import React, { useState } from "react";

const Cart = () => {
    const [selected, setSelected] =useState([])
    return (
        <>
            <Table cart={selected} />
        </>
    );
}

export default Cart;