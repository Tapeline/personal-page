export default function MiniYearDivider({year}: {year: number}) {
    return (<div className="flex mb-5 items-center gap-3 t-year-divider">
        <hr className="w-[64px]"/>
        <h2 className="t-font-cond text-2xl">{year}</h2>
        <hr className="w-[64px]"/>
    </div>)
}
