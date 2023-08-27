import { NextResponse } from "next/server";
import connect from '../../../../utils/db';
import Post from '../../../../models/Post';


export const GET = async (request, { params }) => {

    const {id} = params

    try {
        await connect();
        const post = await Post.findById(id);
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.error("Database Error:", err);
        return new NextResponse({ error: "Database Error" }, { status: 500 });
    }
};
