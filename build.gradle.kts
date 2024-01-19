import com.bmuschko.gradle.docker.tasks.image.*

plugins {
    id("com.github.node-gradle.node") version "7.0.1"
    id("com.bmuschko.docker-remote-api") version "9.4.0"
}

task<Delete>("clear") {
    setDelete("build")
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


tasks.create("buildImage", DockerBuildImage::class) {
    inputDir.set(file("build"))
    dockerFile.set(file("Dockerfile"))
}.apply {
    group = "build"
}