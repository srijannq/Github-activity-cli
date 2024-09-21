#!/usr/bin/env node

import axios from "axios";
const userName = process.argv[2];

const formatData = (datas) => {
  let action;
  datas.forEach((data) => {
    switch (data.type) {
      case "PushEvent":
        action = `Pushed ${data.payload.commits.length} commit(s) to ${data.repo.name}`;
        break;
      case "IssuesEvent":
        action = `${
          data.payload.action.charAt(0).toUpperCase() +
          data.payload.action.slice(1)
        } an issue in ${data.repo.name}`;
        break;
      case "ForkEvent":
        action = `Forked ${data.repo.name}`;
        break;
      case "WatchEvent":
        action = `Starred ${data.repo.name}`;
        break;
      case "CreateEvent":
        action = `Created a ${data.payload.ref_type} on ${data.payload.master_branch} in ${data.repo.name}`;
        break;
      default:
        action = `${data.type.replace("Event", "")} in ${data.repo.name}`;
        break;
    }
    console.log(`- ${action}`);
  });
};
const fetchOp = async () => {
  if (!userName) {
    console.log("Please Enter your github userName!");
    return;
  }
  try {
    console.log("Loading the data");
    const response = await axios.get(
      `https://api.github.com/users/${userName}/events`
    );
    console.clear();
    formatData(response.data);
  } catch (e) {
    console.clear();
    if (e.response.status === 404) {
      console.log(
        "The username is incorrect! Please try with a correct username"
      );
    } else {
      console.log("There was issue getting to the api! Please try again!");
    }
  }
};

fetchOp();
