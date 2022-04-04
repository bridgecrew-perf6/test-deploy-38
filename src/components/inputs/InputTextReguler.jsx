import * as React from "react";

function InputTextReguler({ name, label, value, inputAction }) {
    return (
        <div className="relative">
            <input
                id={`id-${name}`}
                name={`name-${name}`}
                type="text"
                className="peer h-10 w-full border-2 rounded px-2 border-gray-300 text-gray-900 focus:outline-none focus:border-sky-600 placeholder-transparent"
                placeholder={label}
                value={value}
                onChange={inputAction}
            />
            <label
                for="category-name"
                className="
                  absolute
                  px-2
                  -top-6
                  left-0
                  text-gray-600
                  text-sm
                  peer-placeholder-shown:text-base
                  peer-placeholder-shown:text-gray-400
                  peer-placeholder-shown:top-2
                  peer-focus:-top-6
                  peer-focus:text-gray-600
                  peer-focus:text-sm"
            >
                {label}
            </label>
        </div>
    );
}

export default InputTextReguler;
