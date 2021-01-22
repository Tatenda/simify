/** @jsx jsx */
import { jsx } from "theme-ui";
import { FC, useState } from "react";
import { Layout, Menu } from "antd";
import { useRouter } from "next/router";

const { Header } = Layout;

const Nav: FC = () => {
    const [Current, setCurrent] = useState("");
    const router = useRouter();

    const handleMenuClick = ({ key }) => {
        console.log("Menu");

        switch (key) {
            case "logout":
                setCurrent(null);
                break;
            case "login":
                router.push("/account/login");
                break;
            case "register":
                router.push("/account/register");
                break;
            case "home":
                router.push("/");
                break;
            default:
                router.push(`/${key}`);
                break;
        }
    };

    return (
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <Menu
                onClick={handleMenuClick}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={["2"]}
            >
                <Menu.Item key="home">Home</Menu.Item>
                <>
                    <Menu.Item key="register">Register</Menu.Item>
                    <Menu.Item key="login">Login</Menu.Item>
                </>
            </Menu>
        </Header>
    );
};

export default Nav;
