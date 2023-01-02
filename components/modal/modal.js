import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function Modal(props) {
    if (!props.show) return null

    return (
        <div className="absolute top-0 flex h-screen w-full items-center justify-center bg-transparent backdrop-blur-sm">
            <div className="relative w-2/5" id="modal">
                <div className="absolute h-full w-full rounded-2xl bg-blue-100 blur-sm dark:bg-indigo-900"></div>
                <div className="relative m-[4px] rounded-xl border-2 border-indigo-600 px-4 pb-4 dark:bg-black">
                    <h1 className="my-5 text-3xl">Create Post</h1>
                    <AiOutlineClose
                        className="absolute top-0 right-0 m-8 text-2xl font-bold active:bg-gray-500"
                        onClick={props.onClose}
                    />
                    <form action="" className="flex flex-col space-y-4">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Title..."
                            className="w-full rounded-lg border-2 border-gray-300 bg-transparent p-2 dark:border-gray-700"
                        />
                        <label>Content</label>
                        <textarea
                            type="text"
                            placeholder="content.."
                            className="w-full rounded-lg border-2 border-gray-300 bg-transparent p-2 dark:border-gray-700"
                        />
                        <button
                            type="submit"
                            className="w-32 rounded-xl border-2 border-indigo-600 bg-indigo-600 py-2 font-medium hover:bg-transparent hover:text-indigo-600 active:bg-gray-300"
                        >
                            Simpan
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
