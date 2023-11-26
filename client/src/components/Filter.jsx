import { Link } from "react-router-dom"

function Filter() {
    return (
        <div className="mt-5 flex flex-col gap-12">
            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Categories</h1>
                <div className="bg-primary-color ring-1 ring-primary-color rounded-full me-6"></div>
                <div className="flex flex-col gap-2">
                    <Link to='#' className="pe-6 group">
                        <div className="py-2 border-b group-hover:font-bold">New Shoes</div>
                    </Link>
                    <Link to='#' className="pe-6 group">
                        <div className="py-2 border-b group-hover:font-bold">2 Hand Shoes</div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Price</h1>
                <div className="bg-primary-color ring-1 ring-primary-color rounded-full me-6"></div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>0 - 50$</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>50 - 150$</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>150 - 300$</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>above 300$</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Brand</h1>
                <div className="bg-primary-color ring-1 ring-primary-color rounded-full me-6"></div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>Nike</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>Adidas</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>New Balance</span>
                    </div>
                    <div className="flex gap-3">
                        <input type="checkbox" />
                        <span>Converse</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-3">
                <h1 className="font-bold text-xl">Size</h1>
                <div className="bg-primary-color ring-1 ring-primary-color rounded-full me-6"></div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>7</span>
                    </div>
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>8</span>
                    </div>
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>9</span>
                    </div>
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>10</span>
                    </div>
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>11</span>
                    </div>
                    <div className="flex gap-3 col-span-1">
                        <input type="checkbox" />
                        <span>12</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter