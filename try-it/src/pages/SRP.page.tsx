const SRPPage = () => (
    <div className="single-responsibility-principle">
        <h2 className="text-3xl mb-2">1 - Principio de responsabilidad única</h2>
        <ul className="list-disc">
            <li>Una entidad (función, clase, componente, hook) debería tener un único motivo para cambiar.</li>
            <li>
                Mejora <strong>legibilidad, testeo, mantenibilidad y colaboración</strong>.
            </li>
        </ul>
    </div>
);

export default SRPPage;
