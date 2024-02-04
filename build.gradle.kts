
plugins {
    id("com.github.node-gradle.node") version "7.0.1"
}

task<Delete>("clean") {
    setDelete("build")
    isFollowSymlinks = false
}.apply {
    group = "build"
}

task<Delete>("clean_node_modules") {
    setDelete("node_modules")
    isFollowSymlinks = false
}.apply {
    group = "build"
}

task<Exec>("build") {
    commandLine("npm", "run", "build")
}.apply {
    group = "build"
    dependsOn("npmInstall")
}
