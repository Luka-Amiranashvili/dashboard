import connect from "@/app/utils/db";
import { NextResponse } from "next/server";
import Post from "../../../models/Post";

export const GET = async (request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get('username');

    try {
        await connect();

        // Directly find posts based on the username query
        const query = username ? { username } : {};
        const posts = await Post.find(query); // Only query once

        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (err) {
        console.error("Database Error:", err); // Log the error for debugging
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const POST = async (request) => {
    const body = await request.json();
    const newPost = new Post(body);

    try {
        await connect();
        await newPost.save();
        return new NextResponse('Post has been created', { status: 201 });
    } catch (err) {
        console.error("Database Error:", err); // Log the error for debugging
        return new NextResponse("Database Error", { status: 500 });
    }
};