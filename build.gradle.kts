import com.github.dockerjava.api.model.AuthConfig

plugins {
    id("com.github.node-gradle.node") version "7.0.1"
    id("io.github.godfather1103.docker-plugin") version "2.5"
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

docker {
    dockerBuildDependsOn.add("build")
    dockerDirectory.value(project.projectDir.absolutePath)
//    val user = (project.findProperty("docker.username") ?: "") as String
    val password = (project.findProperty("docker.password") ?: "") as String
    val email = (project.findProperty("docker.email") ?: "") as String
    val name = (project.findProperty("docker.demo.imageName") ?: "demo") as String
//    if (user.isNotEmpty() && password.isNotEmpty()) {
//        auth.value(AuthConfig(user, password, email))
//    }
    dockerBuildArgs.put("GitTag", "1.0")
    imageName.value("$name-kotlin")
    dockerImageTags.add("1.0")
    pushImageTag.value(false)
    pushImage.value(false)
    // since 2.0
    platform.value("linux/arm64/v8")
}
tasks["dockerBuild"].dependsOn("build")

println("tasks[\"dockerBuild\"] => ${tasks["dockerBuild"].javaClass.name}")