import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const categorias = [
    { id: 1, name: 'Flores', unavailable: false },
    { id: 2, name: 'Follaje', unavailable: false },
    { id: 3, name: 'Suculentas', unavailable: false },
    { id: 4, name: 'Cactus', unavailable: false },
    { id: 5, name: 'Palmas', unavailable: false },
    { id: 6, name: 'Accesorios', unavailable: false }
];

const MisCategorias = () => {

    const [category, setCategory] = useState(categorias[0]);

    return (
        <Listbox value={category} onChange={setCategory}>
            {({ open }) => (
                <>
                    <div className="relative mt-4">
                        <Listbox.Button className="relative w-full py-3 pl-3 pr-10 text-left bg-leave rounded-lg shadow-md text-brand font-medium text-xl focus:outline-none">
                            <span className="block truncate">{category.name}</span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                    className="w-6 h-5 text-brand"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                static
                                className="absolute w-full py-1 mt-1 overflow-auto text-lg bg-organic rounded-lg shadow-lg max-h-60  cursor-pointer"
                            >
                                {categorias.map((categoria) => (
                                    <Listbox.Option
                                        key={categoria.id}
                                        value={categoria}
                                        disabled={categoria.unavailable}
                                        className={({ active }) =>
                                            `${active
                                                ? "text-brand bg-eco"
                                                : "text-gray-800"
                                            }
                                            select none relative py-2 pl-10 pr-4`
                                        }
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`${selected ? "font-medium" : "font-normal"
                                                    } block truncate`}>
                                                    {categoria.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`${active ? "text-amber-600" : "text-amber-600"
                                                            }
                                                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                                    >
                                                        <CheckIcon
                                                            className="w-5 h-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}


export default MisCategorias