// Montar uma página para exibir produtos

export default async function ProductsPage() {
    // Buscar os produtos
    const products = await getProducts();

    // Renderizar a lista de produtos
    return (
        <div>
            <h1>Produtos</h1>

        </div>
    );
}



