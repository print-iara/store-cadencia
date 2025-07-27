import React, { createContext, useState, useEffect } from 'react';
// Crear el contexto
export const CarritoContext = createContext();
// Proveedor del contexto

export function CarritoProvider({ children }) {
     const [productosCarrito, setProductosCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    const nuevoTotal = productosCarrito.reduce((acc, p) => acc + p.price * p.cantidad, 0);
    setTotal(nuevoTotal);
  }, [productosCarrito]);

  const agregarAlCarrito = (producto) => {
    const existe = productosCarrito.find((p) => p.id === producto.id);
    if (existe) {
      const carritoActualizado = productosCarrito.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad + producto.cantidad }
          : p
      );
      setProductosCarrito(carritoActualizado);
    } else {
      setProductosCarrito([...productosCarrito, producto]);
    }
  };

  const vaciarCarrito = () => {
    setProductosCarrito([]);
  };

  const borrarProductoCarrito = (id) => {
    const nuevoCarrito = productosCarrito.filter((producto) => producto.id !== id);
    setProductosCarrito(nuevoCarrito);
  };


    return (
        <CarritoContext.Provider value={{
            productosCarrito, agregarAlCarrito,
            vaciarCarrito, borrarProductoCarrito, total
        }}>
            {children}
        </CarritoContext.Provider>
    );
}
